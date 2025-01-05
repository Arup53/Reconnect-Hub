import moment from "moment";

function MyRecoveredItemCardLayout({ item }) {
  return (
    <>
      <div className="card bg-base-100 h-64 shadow-xl">
        <div className="card-body">
          <h2 className="card-title">Person Name: {item.name}</h2>
          <p>Recovered Location: {item.location}</p>
          <p>
            Recovered At: {item.date && moment(item.date).format("DD/MM/YYYY")}
          </p>
        </div>
      </div>
    </>
  );
}

export default MyRecoveredItemCardLayout;
