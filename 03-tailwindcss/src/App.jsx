import { useState, useEffect } from 'react';
import Navbar from './components/Navbar';
import ProductGrid from './components/ProductGrid';
import SkeletonCard from './components/SkeletonCard';


import './index.css';


const productsData = [
  { id: 1, title: 'Produto Incrível de Duas Linhas Para Teste de Ellipsis', price: 99.90, rating: 4, tag: 'Novo', image: '/bananas.jpg', buttonVariant: 'solid' },
  { id: 2, title: 'Produto 2: Aventura Começa Aqui Mesmo', price: 129.90, rating: 5, tag: 'Promo', image: '/bread.jpg', buttonVariant: 'outline' },
  { id: 3, title: 'Produto Três', price: 49.90, rating: 3, tag: null, image: '/carrots.jpg', buttonVariant: 'ghost' },
  { id: 4, title: 'Produto Quatro com um Nome um Pouco Maior que o Normal', price: 199.50, rating: 4, tag: 'Novo', image: '/cokies.jpg', buttonVariant: 'solid' },
  { id: 5, title: 'Produto Cinco', price: 79.00, rating: 5, tag: null, image: '/plums.jpg', buttonVariant: 'outline' },
  { id: 6, title: 'Produto Seis, o Último da Lista de Itens', price: 249.00, rating: 4, tag: 'Promo', image: '/potatos.jpg', buttonVariant: 'ghost' },
];



function App() {

    const [theme, setTheme] = useState(() => {
        const savedTheme = localStorage.getItem('theme');
        return savedTheme || 'light';
    });

    const [isLoading, setLoading] = useState(true)


    useEffect(() => {
        setTimeout(() => {
            setLoading(false)
        }, 2000);
    }, [])

    useEffect(() => {
        document.documentElement.className = theme;
        localStorage.setItem('theme', theme);
    }, [theme]);

    const toggleTheme = () => {
        setTheme(prevTheme => (prevTheme === 'light' ? 'dark' : 'light'));
    };

    return (
        <>

            <Navbar onToggleTheme={toggleTheme} theme={theme} />
            {isLoading ? (
                <main className="product-grid">
                    {/* Cria um array de 6 posições e renderiza um SkeletonCard para cada */}
                    {Array.from({ length: 6 }).map((_, index) => (
                        <SkeletonCard key={index} />
                    ))}
                </main>
            ) : (
                <ProductGrid products={productsData} />
            )}


        </>
    );
}

export default App;
