import { Request, Response } from 'express';
import { StatusCodes } from 'http-status-codes';
import * as yup from 'yup';

interface ICidade {
  name: string;
  state: string;
}

const bodyValidation: yup.ObjectSchema<ICidade> = yup.object().shape({
  name: yup.string().required().min(3),
  state: yup.string().required().length(2),
});

export const create = async (req: Request<{}, {}, ICidade>, res: Response) => {
  let validateData: ICidade | undefined = undefined;

  try {
    validateData = await bodyValidation.validate(req.body, { abortEarly: false });
  } catch (err) {
    const yupError = err as yup.ValidationError;
    const erros: Record<string, string> = {};

    yupError.inner.forEach((error) => {
      if(!error.path) return;
    
      erros[error.path] = error.message;
    });
    

    return res.status(StatusCodes.BAD_REQUEST).json({ 
      errors: erros,
    });
  }  

  return res.send('Create!');
};