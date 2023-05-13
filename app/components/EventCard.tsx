import React from "react";

type Props = {
  id: string;
  title: string;
  author?: string;
  seconds?: any;
};

// Formatage des dates car seul les secondes sont renvoyées du backend firebase
function formatDateFromSeconds(seconds: number) {
  const date = new Date(seconds * 1000);
  const formattedDate = date.toLocaleDateString("fr-FR");
  return formattedDate;
}

function EventCard({ id, title, author, seconds }: Props) {
  const formattedDate = formatDateFromSeconds(seconds);

  return (
    <div key={id} className="card w-80 bg-base-100 shadow-xl mr-5 mb-6">
      <div className="card-body">
        <h2 className="card-title">{title}</h2>
        <p className="text-sm">
          Créé le <span>{formattedDate ? formattedDate : "?"}</span> par{" "}
          <span>{author ? author : "Matthieu"}</span>
        </p>
        <div className="card-actions justify-end">
          <button className="btn btn-primary">Continuer</button>
        </div>
      </div>
    </div>
  );
}

export default EventCard;
