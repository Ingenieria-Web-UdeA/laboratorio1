import express from 'express';
import pkg from '@prisma/client';

const { PrismaClient } = pkg;

const prisma = new PrismaClient();

const rutasProject = express.Router();

rutasProject.route('/test').get(async (req, res) => {
  //   const clientes = await prisma.test.findMany();
  res.status(200).json({ test: true });
});

export { rutasProject };