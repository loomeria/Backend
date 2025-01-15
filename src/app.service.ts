import { Injectable } from '@nestjs/common';
import * as fs from 'fs';

@Injectable()
export class AppService {
  info(): { name: string; version: string } {
    const packageJson = fs.readFileSync(
      `${process.cwd()}/package.json`,
      'utf8',
    );
    const { name, version } = JSON.parse(packageJson);
    return {
      name,
      version,
    };
  }

  ping(): string {
    return 'pong';
  }
}
