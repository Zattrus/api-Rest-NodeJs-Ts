import { Request, Response } from 'express';
import * as yup from 'yup';
import { validation } from '../../shared/middlewares';

interface ICidade {
  name: string;
  state: string;
}
interface IFilter {
  filter?: string;
}
export const createValidation = validation((getSchema) => ({
  body: getSchema<ICidade>(yup.object().shape({
    name: yup.string().required().min(3),
    state: yup.string().required().length(2),
  })),
  query: getSchema<IFilter>(yup.object().shape({
    filter: yup.string().optional().min(3),
  })),
}));

export const create = async (req: Request<{}, {}, ICidade>, res: Response) => {

  return res.send('Create!');

};