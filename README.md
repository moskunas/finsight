### Stack

- Blitz?
- NestJs -> TypeORM -> Docker PSQL

##### TODO:

- [x] - setup local psql db instance w/ docker
- [x] - connect nestjs to local docker db
- [x] - config management through config service
- [x] - define and local data model entities
- [x] - apply db schema, gen & run db migrations to confirm working
  - [x] - 1.  setup for typeORM CLI
  - [x] - 2.  create migration
  - [x] - 3.  run migration
- [x] - confirm that migration ran correctly in pgadmin
- [x] - adding some business logic (external asset querying)
- [ ] - adding DTO's & responses to not expose data
- [ ] - setup openapi (swagger)
- [ ] - define local seeding data
  - [ ] - script to seed random data if desired
  - [ ] - script to init actually asset symbols we will actually care about (this will depend on the init business logic from before)
