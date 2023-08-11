const leoName = 'Leo Musvaire'
const leoNumber = '2'
const leoStreet = 'Church St.'
const leoPostal = '3105'
const leoBalance = '-10'

const sarahName = 'Sarah    '
const sarahSurname = 'Kleinhans'
const sarahBalance = '-4582.21000111'
const sarahNumber = '13'
const sarahStreet = 'William Close'
const sarahPostal = '0310'

// Only change below this line

const leo = {
	name: leoName,
	balance: leoBalance,
	accessId: '47afb389-8014-4d0b-aff3-e40203d2107f',
	age: 24,
	address: {
		number: leoNumber,
		street: leoStreet,
		postalCode: leoPostal,
	},
}

const sarah = {
	name: sarahName + sarahSurname,
	age: 62,
	access_id: '6b279ae5-5657-4240-80e9-23f6b635f7a8',
	balance: sarahBalance,
	address: {
		number: sarahNumber,
		street: sarahStreet,
		postalCode: sarahPostal,
	},
}
// console.log user . variable inside . convention name with data
console.log(leo.address.number, leo.address.street, leo.address.postalCode)
console.log(sarah.address.number, sarah.address.street, sarah.address.postalCode)