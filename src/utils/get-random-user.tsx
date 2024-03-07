import { AppointmentListItemProps, Status } from '@/components/appointment-list/list-item';
import { faker } from '@faker-js/faker';

const status: Status[] = ["pending", "confirmed", "declined"]

export function createRandomUser(): AppointmentListItemProps {
  let gender = faker.person.sex()

  return {
    userName: faker.person.fullName(),
    gender: gender.charAt(0).toUpperCase() + gender.slice(1),
    age: faker.number.int({
      max: 100,
      min: 18
    }),
    ISODate: faker.date.soon({
      days: 15
    }).toISOString(),
    imageURL: "https://i.pravatar.cc/280",
    status: status[Math.floor(Math.random() * status.length)],
  };
}