import { Test, TestingModule } from '@nestjs/testing';
import { AddressService } from './address.service';
import { PrismaService } from '../prisma/prisma.service';
import { Address } from '@prisma/client';

describe('AddressService', () => {
  let service: AddressService;
  let prisma: PrismaService;

  const mockAddress: any = {
    id_address: 1,
    id_user: 1,
    city: 'Paris',
    zipcode: '75000',
    country: 'France',
    created_at: new Date(),
    updated_at: new Date(),
  };

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [
        AddressService,
        {
          provide: PrismaService,
          useValue: {
            address: {
              create: jest.fn(),
              findMany: jest.fn(),
              findUnique: jest.fn(),
              update: jest.fn(),
              delete: jest.fn(),
            },
          },
        },
      ],
    }).compile();

    service = module.get<AddressService>(AddressService);
    prisma = module.get<PrismaService>(PrismaService);
  });

  describe('create', () => {
    it('devrait créer une adresse', async () => {
      jest.spyOn(prisma.address, 'create').mockResolvedValue(mockAddress);

      const result = await service.create(mockAddress);

      expect(prisma.address.create).toHaveBeenCalledWith({
        data: mockAddress,
      });
      expect(result).toEqual(mockAddress);
    });
  });

  describe('findAll', () => {
    it('devrait retourner toutes les adresses', async () => {
      const addresses = [mockAddress];
      jest.spyOn(prisma.address, 'findMany').mockResolvedValue(addresses);

      const result = await service.findAll();

      expect(prisma.address.findMany).toHaveBeenCalled();
      expect(result).toEqual(addresses);
    });
  });

  describe('findOne', () => {
    it('devrait retourner une adresse par son id', async () => {
      jest.spyOn(prisma.address, 'findUnique').mockResolvedValue(mockAddress);

      const result = await service.findOne(1);

      expect(prisma.address.findUnique).toHaveBeenCalledWith({
        where: { id_address: 1 },
      });
      expect(result).toEqual(mockAddress);
    });
  });

  describe('findAllByUserId', () => {
    it("devrait retourner toutes les adresses d'un utilisateur", async () => {
      const addresses = [mockAddress];
      jest.spyOn(prisma.address, 'findMany').mockResolvedValue(addresses);

      const result = await service.findAllByUserId(1);

      expect(prisma.address.findMany).toHaveBeenCalledWith({
        where: { id_user: 1 },
      });
      expect(result).toEqual(addresses);
    });
  });

  describe('update', () => {
    it('devrait mettre à jour une adresse', async () => {
      const updateData: Address = {
        ...mockAddress,
        street: '456 Rue Update',
      };

      jest.spyOn(prisma.address, 'update').mockResolvedValue(updateData);

      const result = await service.update(1, updateData);

      expect(prisma.address.update).toHaveBeenCalledWith({
        where: { id_address: 1 },
        data: updateData,
      });
      expect(result).toEqual(updateData);
    });
  });

  describe('remove', () => {
    it('devrait supprimer une adresse', async () => {
      // D'abord créer
      jest.spyOn(prisma.address, 'create').mockResolvedValue(mockAddress);
      const created = await service.create(mockAddress);

      // Ensuite supprimer
      jest.spyOn(prisma.address, 'delete').mockResolvedValue(mockAddress);
      const result = await service.remove(created.id_address);

      expect(prisma.address.delete).toHaveBeenCalledWith({
        where: { id_address: created.id_address },
      });
      expect(result).toEqual(mockAddress);
    });
  });
});
