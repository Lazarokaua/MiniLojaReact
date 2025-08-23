

const SkeletonCard = () => {
    return (
        <div className="product-card"> {/* Usamos a mesma classe de container */}
            <div className="card-image-placeholder skeleton"></div>
            <div className="card-content">
                {/* Placeholder para o título (2 linhas) */}
                <div style={{ height: '1rem', marginBottom: '0.5rem' }} className="skeleton"></div>
                <div style={{ height: '1rem', width: '80%', marginBottom: '1rem' }} className="skeleton"></div>

                {/* Placeholder para o preço */}
                <div style={{ height: '1.25rem', width: '40%', marginBottom: '1rem' }} className="skeleton"></div>

                {/* Placeholder para o rating */}
                <div style={{ height: '1rem', width: '60%', marginBottom: '1.5rem' }} className="skeleton"></div>

                {/* Placeholder para o botão */}
                <div style={{ height: '45px' }} className="skeleton"></div>
            </div>
        </div>
    );
};


export default SkeletonCard
