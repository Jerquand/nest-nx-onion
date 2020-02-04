import { CommandHandler } from '@nestjs/cqrs';
import { CreateUserCommand, CreateUserHandler } from '@onion-first/backend/user/core/application';
import { UserRepository } from '@onion-first/backend/user/core/domain';

@CommandHandler(CreateUserCommand)
export class CreateUserHandlerImpl extends CreateUserHandler {
  constructor(protected repository: UserRepository) {
    super(repository);
  }
}
