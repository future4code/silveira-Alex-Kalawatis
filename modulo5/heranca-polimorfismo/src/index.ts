import { Customer } from "./Classes/Customer";
import { User } from "./Classes/User";

const newUser = new User('001','alex@teste.com','Alex','12345678')
const newCustomer = new Customer('001','ana@teste.com','Ana','12345678','1234567890123456')
const infosCustomer = [newCustomer.getId(),newCustomer.getName(),newCustomer.getEmail(),newCustomer.getCreditCard(),newCustomer.purchaseTotal]
console.log(infosCustomer)
console.log(newCustomer.introduceYourself())