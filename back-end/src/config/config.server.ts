import * as dotenv from 'dotenv';
import { TypeOrmModuleOptions } from '@nestjs/typeorm';

dotenv.config();

class ConfigService {
  constructor(private env: { [k: string]: string | undefined }) {}

  private parseBoolean(value: string) {
    return value === 'true';
  }

  private getValue(key: string, throwOnMissing = true): string {
    const value = this.env[key];
    /* istanbul ignore next */
    if (!value && throwOnMissing)
      throw new Error(`config error - missing env.${key}`);

    return value;
  }

  public ensureValues(keys: string[]) {
    keys.forEach((k) => this.getValue(k, true));
    return this;
  }

  public getPort() {
    return this.getValue('PORT', true);
  }

  public getJwtSecret() {
    return this.getValue('JWT_SECRET', true);
  }

  public getAccessTokenLife() {
    return this.getValue('JWT_ACCESS_TOKEN_LIFE', true);
  }

  public getRefreshTokenLife() {
    return this.getValue('JWT_REFRESH_TOKEN_LIFE', true);
  }

  public getSaltRounds() {
    return +this.getValue('BCRYPT_SALT_ROUNDS');
  }

  public isProduction() {
    const mode = this.getValue('MODE', false);
    return mode != 'DEV';
  }

  public getTypeOrmConfig(): TypeOrmModuleOptions {
    return {
      type: 'postgres',

      host: this.getValue('POSTGRES_HOST'),
      port: +this.getValue('POSTGRES_PORT'),
      username: this.getValue('POSTGRES_USER'),
      password: this.getValue('POSTGRES_PASSWORD'),
      database: this.getValue('POSTGRES_DATABASE'),

      entities: [],
      autoLoadEntities: true,

      ssl: this.isProduction(),
      keepConnectionAlive: true,

      synchronize: this.parseBoolean(this.getValue('POSTGRES_SYNC')),
      dropSchema: this.parseBoolean(this.getValue('POSTGRES_DROP_SCHEMA')),
    };
  }
}

const configService = new ConfigService(process.env).ensureValues([
  'PORT',
  'MODE',

  'POSTGRES_HOST',
  'POSTGRES_PORT',
  'POSTGRES_USER',
  'POSTGRES_PASSWORD',
  'POSTGRES_DATABASE',
  'POSTGRES_SYNC',
  'POSTGRES_DROP_SCHEMA',

  'JWT_SECRET',
  'JWT_ACCESS_TOKEN_LIFE',
  'JWT_REFRESH_TOKEN_LIFE',
  'BCRYPT_SALT_ROUNDS',
]);

export { configService };
