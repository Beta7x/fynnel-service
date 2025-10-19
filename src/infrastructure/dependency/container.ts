import "reflect-metadata";
import { container } from "tsyringe";
import { IUserRepository } from "../../domain/user.repository";
import { PrismaUserRepository } from "../database/prisma.user.repository";
import { CreateUserUsecase } from "../../application/create-user.usecase";

// register prisma
// container.register<PrismaClient>(PrismaClient, { useValue: new PrismaClient() });

// register repository
container.register<IUserRepository>("IUserRepository", { useClass: PrismaUserRepository });

// register use case
container.register<CreateUserUsecase>(CreateUserUsecase, { useClass: CreateUserUsecase });


export { container };
