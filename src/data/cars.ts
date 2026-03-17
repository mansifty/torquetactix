import toyotaHarrier from '@/assets/cars/toyota-harrier.png';
import hondaInsight from '@/assets/cars/honda-insight.png';
import toyotaPrius from '@/assets/cars/toyota-prius.png';
import bmw5Series from '@/assets/cars/bmw-5series.png';
import hondaCrv from '@/assets/cars/honda-crv.png';
import mercedesE250 from '@/assets/cars/mercedes-e250.png';
import toyotaCross from '@/assets/cars/toyota-cross.png';
import hondaCivic from '@/assets/cars/honda-civic.png';
import bmw3Series from '@/assets/cars/bmw-3series.png';
import bmw7Series from '@/assets/cars/bmw-7series.png';
import bmwX3 from '@/assets/cars/bmw-x3.png';
import bmwX5 from '@/assets/cars/bmw-x5.png';
import bmwX1 from '@/assets/cars/bmw-x1.png';
import mercedesCCoupe from '@/assets/cars/mercedes-c-coupe.png';
import mercedesSClass from '@/assets/cars/mercedes-s-class.png';
import mercedesGlc from '@/assets/cars/mercedes-glc.png';
import mercedesGle from '@/assets/cars/mercedes-gle.png';
import mercedesCla from '@/assets/cars/mercedes-cla.png';
import mercedesAmgGt from '@/assets/cars/mercedes-amg-gt.png';
import audiA3 from '@/assets/cars/audi-a3.png';
import audiA4 from '@/assets/cars/audi-a4.png';
import audiA6 from '@/assets/cars/audi-a6.png';
import audiQ5 from '@/assets/cars/audi-q5.png';
import audiQ7 from '@/assets/cars/audi-q7.png';
import rangeRover from '@/assets/cars/range-rover.png';
import vwPassat from '@/assets/cars/vw-passat.png';
import porscheCayenne from '@/assets/cars/porsche-cayenne.png';
import porschePanamera from '@/assets/cars/porsche-panamera.png';

export interface Car {
  id: string;
  name: string;
  year: number;
  image: string;
  price: string;
  priceNum: number;
  mileage: string;
  engine: string;
  fuel: string;
  grade: string;
  condition: 'new' | 'reconditioned' | 'used';
  category: 'jdm' | 'german';
  bodyType: string;
}

export const featuredCars: Car[] = [
  // JDM Cars
  { id: '1', name: 'Toyota Harrier', year: 2020, image: toyotaHarrier, price: '৳52,00,000', priceNum: 5200000, mileage: '12,000 km', engine: '2.0L Turbo', fuel: 'Hybrid', grade: '4.5 / B', condition: 'reconditioned', category: 'jdm', bodyType: 'SUV' },
  { id: '2', name: 'Honda Insight', year: 2020, image: hondaInsight, price: '৳38,00,000', priceNum: 3800000, mileage: '18,000 km', engine: '1.5L i-VTEC', fuel: 'Hybrid', grade: '4.5 / A', condition: 'reconditioned', category: 'jdm', bodyType: 'Sedan' },
  { id: '3', name: 'Toyota Prius', year: 2021, image: toyotaPrius, price: '৳42,00,000', priceNum: 4200000, mileage: '8,000 km', engine: '1.8L Hybrid', fuel: 'Hybrid', grade: '5 / A', condition: 'reconditioned', category: 'jdm', bodyType: 'Sedan' },
  { id: '5', name: 'Honda CR-V', year: 2020, image: hondaCrv, price: '৳48,00,000', priceNum: 4800000, mileage: '22,000 km', engine: '1.5L VTEC Turbo', fuel: 'Petrol', grade: '4 / B', condition: 'reconditioned', category: 'jdm', bodyType: 'SUV' },
  { id: '7', name: 'Toyota Cross', year: 2019, image: toyotaCross, price: '৳35,00,000', priceNum: 3500000, mileage: '30,000 km', engine: '1.8L Hybrid', fuel: 'Hybrid', grade: '4 / B', condition: 'reconditioned', category: 'jdm', bodyType: 'SUV' },
  { id: '8', name: 'Honda Civic', year: 2022, image: hondaCivic, price: '৳45,00,000', priceNum: 4500000, mileage: '5,000 km', engine: '1.5L VTEC Turbo', fuel: 'Petrol', grade: '5 / A', condition: 'new', category: 'jdm', bodyType: 'Sedan' },

  // German Cars (original 2)
  { id: '4', name: 'BMW 5 Series', year: 2021, image: bmw5Series, price: '৳85,00,000', priceNum: 8500000, mileage: '15,000 km', engine: '2.0L Twin-Turbo', fuel: 'Petrol', grade: '4 / B', condition: 'reconditioned', category: 'german', bodyType: 'Sedan' },
  { id: '6', name: 'Mercedes E250', year: 2019, image: mercedesE250, price: '৳78,00,000', priceNum: 7800000, mileage: '25,000 km', engine: '2.0L Turbo', fuel: 'Petrol', grade: '4 / A', condition: 'used', category: 'german', bodyType: 'Sedan' },

  // 20 New German Cars
  { id: '9', name: 'BMW 3 Series', year: 2021, image: bmw3Series, price: '৳65,00,000', priceNum: 6500000, mileage: '18,000 km', engine: '2.0L TwinPower Turbo', fuel: 'Petrol', grade: '4.5 / A', condition: 'reconditioned', category: 'german', bodyType: 'Sedan' },
  { id: '10', name: 'BMW 7 Series', year: 2022, image: bmw7Series, price: '৳1,45,00,000', priceNum: 14500000, mileage: '10,000 km', engine: '3.0L Twin-Turbo I6', fuel: 'Petrol', grade: '5 / A', condition: 'reconditioned', category: 'german', bodyType: 'Sedan' },
  { id: '11', name: 'BMW X3', year: 2021, image: bmwX3, price: '৳72,00,000', priceNum: 7200000, mileage: '20,000 km', engine: '2.0L TwinPower Turbo', fuel: 'Petrol', grade: '4 / B', condition: 'reconditioned', category: 'german', bodyType: 'SUV' },
  { id: '12', name: 'BMW X5', year: 2022, image: bmwX5, price: '৳1,20,00,000', priceNum: 12000000, mileage: '12,000 km', engine: '3.0L Twin-Turbo I6', fuel: 'Petrol', grade: '4.5 / A', condition: 'reconditioned', category: 'german', bodyType: 'SUV' },
  { id: '13', name: 'BMW X1', year: 2022, image: bmwX1, price: '৳55,00,000', priceNum: 5500000, mileage: '14,000 km', engine: '1.5L TwinPower Turbo', fuel: 'Petrol', grade: '4.5 / A', condition: 'reconditioned', category: 'german', bodyType: 'SUV' },
  { id: '14', name: 'Mercedes C-Class Coupe', year: 2021, image: mercedesCCoupe, price: '৳82,00,000', priceNum: 8200000, mileage: '16,000 km', engine: '2.0L Turbo', fuel: 'Petrol', grade: '4 / A', condition: 'reconditioned', category: 'german', bodyType: 'Coupe' },
  { id: '15', name: 'Mercedes S-Class', year: 2022, image: mercedesSClass, price: '৳2,10,00,000', priceNum: 21000000, mileage: '8,000 km', engine: '3.0L Turbo I6', fuel: 'Petrol', grade: '5 / A', condition: 'reconditioned', category: 'german', bodyType: 'Sedan' },
  { id: '16', name: 'Mercedes GLC', year: 2021, image: mercedesGlc, price: '৳88,00,000', priceNum: 8800000, mileage: '19,000 km', engine: '2.0L Turbo', fuel: 'Petrol', grade: '4.5 / B', condition: 'reconditioned', category: 'german', bodyType: 'SUV' },
  { id: '17', name: 'Mercedes GLE', year: 2022, image: mercedesGle, price: '৳1,35,00,000', priceNum: 13500000, mileage: '11,000 km', engine: '3.0L Turbo I6', fuel: 'Petrol', grade: '4.5 / A', condition: 'reconditioned', category: 'german', bodyType: 'SUV' },
  { id: '18', name: 'Mercedes CLA', year: 2020, image: mercedesCla, price: '৳58,00,000', priceNum: 5800000, mileage: '22,000 km', engine: '1.3L Turbo', fuel: 'Petrol', grade: '4 / B', condition: 'used', category: 'german', bodyType: 'Sedan' },
  { id: '19', name: 'Mercedes AMG GT', year: 2023, image: mercedesAmgGt, price: '৳3,50,00,000', priceNum: 35000000, mileage: '3,000 km', engine: '4.0L V8 Biturbo', fuel: 'Petrol', grade: '5 / A', condition: 'new', category: 'german', bodyType: 'Coupe' },
  { id: '20', name: 'Audi A3', year: 2021, image: audiA3, price: '৳48,00,000', priceNum: 4800000, mileage: '20,000 km', engine: '1.4L TFSI Turbo', fuel: 'Petrol', grade: '4 / B', condition: 'reconditioned', category: 'german', bodyType: 'Sedan' },
  { id: '21', name: 'Audi A4', year: 2023, image: audiA4, price: '৳72,00,000', priceNum: 7200000, mileage: '6,000 km', engine: '2.0L TFSI Turbo', fuel: 'Petrol', grade: '5 / A', condition: 'reconditioned', category: 'german', bodyType: 'Sedan' },
  { id: '22', name: 'Audi A6', year: 2022, image: audiA6, price: '৳95,00,000', priceNum: 9500000, mileage: '12,000 km', engine: '2.0L TFSI Turbo', fuel: 'Petrol', grade: '4.5 / A', condition: 'reconditioned', category: 'german', bodyType: 'Sedan' },
  { id: '23', name: 'Audi Q5', year: 2021, image: audiQ5, price: '৳82,00,000', priceNum: 8200000, mileage: '18,000 km', engine: '2.0L TFSI Quattro', fuel: 'Petrol', grade: '4 / A', condition: 'reconditioned', category: 'german', bodyType: 'SUV' },
  { id: '24', name: 'Audi Q7', year: 2022, image: audiQ7, price: '৳1,40,00,000', priceNum: 14000000, mileage: '9,000 km', engine: '3.0L V6 TFSI', fuel: 'Petrol', grade: '4.5 / A', condition: 'reconditioned', category: 'german', bodyType: 'SUV' },
  { id: '25', name: 'Range Rover Sport', year: 2025, image: rangeRover, price: '৳3,20,00,000', priceNum: 32000000, mileage: '1,000 km', engine: '3.0L I6 Turbo', fuel: 'Petrol', grade: '5 / A', condition: 'new', category: 'german', bodyType: 'SUV' },
  { id: '26', name: 'Volkswagen Passat', year: 2021, image: vwPassat, price: '৳42,00,000', priceNum: 4200000, mileage: '25,000 km', engine: '1.8L TSI Turbo', fuel: 'Petrol', grade: '4 / B', condition: 'used', category: 'german', bodyType: 'Sedan' },
  { id: '27', name: 'Porsche Cayenne', year: 2022, image: porscheCayenne, price: '৳2,80,00,000', priceNum: 28000000, mileage: '5,000 km', engine: '3.0L V6 Turbo', fuel: 'Petrol', grade: '5 / A', condition: 'reconditioned', category: 'german', bodyType: 'SUV' },
  { id: '28', name: 'Porsche Panamera', year: 2021, image: porschePanamera, price: '৳2,95,00,000', priceNum: 29500000, mileage: '8,000 km', engine: '2.9L V6 Twin-Turbo', fuel: 'Petrol', grade: '4.5 / A', condition: 'reconditioned', category: 'german', bodyType: 'Sedan' },
];

export const introCarPool = [
  { name: 'Toyota Harrier 2020', image: toyotaHarrier },
  { name: 'Honda Insight 2020', image: hondaInsight },
  { name: 'Toyota Prius 2021', image: toyotaPrius },
  { name: 'BMW 5 Series 2021', image: bmw5Series },
  { name: 'Honda CR-V 2020', image: hondaCrv },
  { name: 'Mercedes E250', image: mercedesE250 },
  { name: 'Toyota Cross 2019', image: toyotaCross },
  { name: 'Honda Civic 2022', image: hondaCivic },
  { name: 'BMW 7 Series 2022', image: bmw7Series },
  { name: 'Mercedes S-Class 2022', image: mercedesSClass },
  { name: 'Porsche Panamera 2021', image: porschePanamera },
  { name: 'Audi A6 2022', image: audiA6 },
];
