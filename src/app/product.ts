export interface Product{
 id:number;
 name:string;
 price:number;
 description:string;    
}

export const product : Product[] = [
     {
          id: 1,
          name: 'Samsung',
          price: 799,
          description: 'A large phone with one of the best screens'
        },
        {
          id: 2,
          name: 'Redmi',
          price: 899,
          description: 'A great phone with one of the best cameras'
        },
        {
          id: 3,
          name: 'Poco',
          price: 299,
          description: 'A nice Choice with different Features'
        }
];
