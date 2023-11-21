const test = () => {
	const b = 'test';
	console.log(b);
};

test();

const type = 'test';

switch (type) {
	case 'test':
		console.log('test');
		break;
}

const arrFoo = [1, 2, 3, 4, 6];

arrFoo.map((x: any) => {
	console.log(x);
	return x;
});

arrFoo.forEach((x: any) => {
	console.log(x);
});
