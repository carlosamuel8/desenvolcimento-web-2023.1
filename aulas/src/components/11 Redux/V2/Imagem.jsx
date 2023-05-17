const Imagem = ({ name, image }) => {
    return (
        <div>
            <img 
                src={image} 
                alt={`${name}-img`}
            />
        </div>
    );
}

export default Imagem;