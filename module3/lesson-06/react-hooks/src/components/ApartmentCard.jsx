function ApartmentCard({ apt }){
    return(
    <div className="card">
        <img src={apt.img} alt="apartment" />
        <h3>{apt.title}</h3>
        <p>Price: {apt.pricePerDay}</p>
      </div>
    );
}

export default ApartmentCard;