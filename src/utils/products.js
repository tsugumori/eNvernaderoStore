export const products = [
  {id: 1, title: 'Jazmín', category: 'exterior', description: 'Sus flores tienen forma de estrellas o hélices. Además, es resistente a las heladas y de crecimiento lento.', 
    price: 100, pictureUrl: "https://www.elmueble.com/medio/2021/05/26/00461764_63ee8ca6_1200x1797.jpg", stock:'number'},
  {id: 2, title: 'Tronco de Brasil', category: 'interior', description: 'Es preferida por aquellos que quieren una planta con cierta altura y verde, pero que no ocupe demasiado espacio. El tronco del Brasil crece muy bien en interiores y con un poco de atención.', 
  price: 100, pictureUrl: "https://www.elmueble.com/medio/2020/03/22/tronco-de-brasil-pinterest_e9b3d66c_1000x1500.jpg", stock:'number'},
  {id: 3, title: 'Petunias', category: 'exterior', description: 'Aguantan el sol, el calor y no necesitan demasiado agua. Así son las petunias, cuyas delicadas flores en forma de trompeta decorarán el exterior de tu casa durante todo el año.', 
    price: 100, pictureUrl: "https://www.elmueble.com/medio/2020/05/26/maceta-de-barro-con-lantana-y-petunias_46490419_853x1280.jpg", stock:'number'},
  {id: 4, title: 'Cactus', category: 'interior', description: 'Pertenecen a la familia de las suculentas. Son plantas que acumulan agua para adaptarse al hábitat en el que se desarrollan y transformado sus hojas en espinas para protegerse de los animales hervíboros y prevenir la pérdida de agua.', 
    price: 100, pictureUrl: "https://www.elmueble.com/medio/2020/03/22/00510500-o_7806a3fc_1200x1797.jpg", stock:'number'},
  {id: 5, title: 'Azalea', category: 'exterior', description: 'Si tienes una terraza sin apenas sol, es una de las plantas con flores que puedes plantar. La azalea es una planta de hoja perenne, si la cuidas bien, te dará tantas flores que apenas verás las hojas.', 
    price: 100, pictureUrl: "https://www.elmueble.com/medio/2018/04/20/azalea_5cd0c9f7.jpg", stock:'number'},
  {id: 6, title: 'Crotón', category: 'interior', description: 'Esta colorida planta de interior es fácil de cuidar y, sobre todo, llenará tu casa con su particular y vistoso colorido. Y es que las hojas del crotón destacan por su color rojizo y brillante. ', 
    price: 100, pictureUrl: "https://www.elmueble.com/medio/2021/02/18/croton-grande-amazon_ce41b2c1_804x1187.jpg", stock:'number'},
  {id: 7, title: 'Planta del Rosario', category: 'interior', description: 'Perfecta para principiantes por sus sencillos cuidados, pero también para los más entendidos en plantas, ya que ofrece un porte colgante ideal para decorar cualquier rincón del interior de tu casa', 
    price: 100, pictureUrl: "https://www.elmueble.com/medio/2021/02/18/string-of-pearls-manomano_64803a64_1200x1797.jpg", stock:'number'},
  {id: 8, title: 'Margaritas', category: 'exterior', description: 'Las margaritas están en todas partes y una de las razones es porque son muy resistentes. Sus flores blancas llenarán de luz tu terraza o balcón. Además no necesita muchos cuidados. ', 
    price: 100, pictureUrl: "https://www.elmueble.com/medio/2020/05/26/detalle-de-consola-con-jarron-de-margaritas-y-casitas_2495a799_838x1280.jpg", stock:'number'}
]

export const getAllProducts = () => {
  const promise = new Promise((resolve) => {
    setTimeout( () => {
    return resolve(products);
    }, 2000)
  })

  return promise
};

export const getProduct = (id) => {
    const promise = new Promise((resolve) => {
      const result = products.find((product) => product.id === parseInt(id))
      setTimeout( () => {
      return resolve(result);
      }, 2000)
    })

    return promise
};

export const getProductsByCategory = (categoryId) => {
    const promise = new Promise((resolve) => {
      const result = products.filter((product) => product.category === categoryId)
      setTimeout( () => {
        return resolve(result);
      }, 2000)
    })

    return promise
};
