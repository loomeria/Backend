import { Controller } from '@nestjs/common';
import { AddressService } from './address.service';
import { Address } from '@prisma/client';

@Controller('address')
export class AddressController {
  constructor(private readonly addressService: AddressService) {}

  create(createAddressDto: Address) {
    return this.addressService.create(createAddressDto);
  }

  findOne(id: string) {
    return this.addressService.findOne(+id);
  }

  update(id: string, updateAddressDto: Address) {
    return this.addressService.update(+id, updateAddressDto);
  }

  remove(id: string) {
    return this.addressService.remove(+id);
  }
}
