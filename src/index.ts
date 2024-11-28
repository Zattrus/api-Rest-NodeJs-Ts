import { server } from './server/Server';

server.listen(process.env.PORT || 3000, () => console.log(`listening on port http://localhost:${process.env.PORT || 3000}`));