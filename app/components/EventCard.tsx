import React from 'react'

type Props = {
    id: string;
    title: string;
    author?: string;
    date?: any
}

function EventCard({id, title, author, date}: Props) {
  return (
    <div key={id} className="card w-80 bg-base-100 shadow-xl mr-5 mb-2">
              <div className="card-body">
                <h2 className="card-title">{title}</h2>
                <p className='text-sm'>
                  Créé le <span>{date ? date : "01/01/2023"}</span> par  <span>{author ? author : "Matthieu"}</span>
                </p>
                <div className="card-actions justify-end">
                  <button className="btn btn-primary">Continuer</button>
                </div>
              </div>
            </div>
  )
}

export default EventCard