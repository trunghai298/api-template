import ip6addr from "ip6addr";
import { Response, NextFunction } from "express";

export const initIP = () => (req: any, res: Response, next: NextFunction) => {
  const ipAddress = req.ips && req.ips.length > 0 ? req.ips[0] : req.ip;
  const ipType = ip6addr.parse(ipAddress).kind();
  req.ctx.ipAddress = ipAddress;
  req.ctx.ipType = ipType;
  next();
};
