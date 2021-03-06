import { Contact, PhoneType } from './types';

// api
// TODO: 아래 함수의 반환 타입을 지정해보세요.
function fetchContacts(): Promise<Contact[]> {
  // TODO: 아래 변수의 타입을 지정해보세요.
  const contacts: Contact[] = [
    {
      name: 'Tony',
      address: 'Malibu',
      phones: {
        [PhoneType.Home]: {
          num: 123112312,
        },
        [PhoneType.Offices]: {
          num: 44455556666,
        },
      },
    },
    {
      name: 'Banner',
      address: 'New York',
      phones: {
        [PhoneType.Home]: {
          num: 77788889999,
        },
      },
    },
    {
      name: '마동석',
      address: '서울시 강남구',
      phones: {
        [PhoneType.Offices]: {
          num: 213423452,
        },
        [PhoneType.Studio]: {
          num: 314882045,
        },
      },
    },
  ];
  return new Promise(resolve => {
    setTimeout(() => resolve(contacts), 2000);
  });
}

// main
class AddressBook {
  // TODO: 아래 변수의 타입을 지정해보세요.
  contacts: Contact[] = [];

  constructor() {
    this.fetchData();
  }

  fetchData(): void {
    fetchContacts().then(response => {
      this.contacts = response;
    });
  }

  /* TODO: 아래 함수들의 파라미터 타입과 반환 타입을 지정해보세요 */
  findContactByName(name: Contact['name']): Contact[] {
    return this.contacts.filter(contact => contact.name === name);
  }

  findContactByAddress(address: Contact['address']): Contact[] {
    return this.contacts.filter(contact => contact.address === address);
  }

  findContactByPhone(phoneNumber: number, phoneType: PhoneType): Contact[] {
    return this.contacts.filter(
      // ! 핵심
      contact => contact.phones[phoneType]?.num === phoneNumber
    );
  }

  addContact(contact: Contact): void {
    this.contacts.push(contact);
  }

  displayListByName(): Contact['name'][] {
    return this.contacts.map(contact => contact.name);
  }

  displayListByAddress(): Contact['address'][] {
    return this.contacts.map(contact => contact.address);
  }

  /* ------------------------------------------------ */
}

new AddressBook();

const assertionContainer = document.querySelector('.container') as HTMLDivElement;
const normalContainer = document.querySelector('.container');

// normalContainer.id; //null 가능성때문에 에러가 난다; strict 설정에 영향을 받는다
if (normalContainer) {
  normalContainer.id;
}
assertionContainer.id; //확실하다고 판단해서 선언한다. if를 줄일수 있다
