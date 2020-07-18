For sequelize.instance issue follow this document. issue is with the latest version of sequelize 5.
this version doesnt have sequelize.instance.
you need another package for this issue or install sequelize@4 and @types/sequelize@4
https://github.com/DefinitelyTyped/DefinitelyTyped/issues/35013

For the following error:
UnhandledPromiseRejectionWarning: SequelizeConnectionError: database "tasks" does not exist

create the tasks database manually using pgAdmin4 or anyother UI Tools for now.