function RecommendCard({ title, description }) {
    return (
        <div style={{
            border: '1px solid #ddd',
            borderRadius: '8px',
            padding: '20px',
            margin: '10px',
            width: '250px',
            boxShadow: '0 4px 10px rgba(0,0,0,0.1)'
        }}>
            <h2>{title}</h2>
            <h4 style={{ color: '#555', margin: '5px 0' }}>설명: {description}</h4>
        </div>

        

    );

}



export default RecommendCard;