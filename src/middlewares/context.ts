export const initCtx = () => (req: any, res: any, next: any) => {
  req.ctx = {};
  next();
};
