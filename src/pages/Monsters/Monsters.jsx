const Monsters = (props) => {
  return (
    <>
      <h1>Monsters</h1>
      <div className="row row-cols-1 row-cols-md-3 g-4">
        {props.monsters.map(monster =>
        <div key={monster._id} className="col">
          <div className="card">
            <img src={monster.image_url} class="card-img-top" alt="..." />
            <div className="card-body">
              <h5 className="card-title">{monster.name}</h5>
              <p className="card-text">Type: {monster.monsterType}</p>
              <p>Top Weakness: {monster.topWeakness}</p>
              <p className="card-text">PostedBy: Admin {monster.createdBy.name}</p>
              <a href="#" className="btn btn-primary">More info</a>
            </div>
          </div>
        </div>
          )}
      </div>

    </>
  );
}

export default Monsters;