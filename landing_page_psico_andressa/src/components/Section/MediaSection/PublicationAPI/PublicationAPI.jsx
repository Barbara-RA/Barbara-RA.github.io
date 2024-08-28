import css from './PublicationAPI.module.css'
import api from '../../../../service/api.js'

import React, { useState, useEffect } from 'react';
import CardPublication from '../CardPublication/CardPublication.jsx';

function PublicationAPI() {

	const [pulications, setPublications] = useState([])

	async function getData() {

        await api.get('/Postagem/pagged?page=1&quantity=12&tipoPostagem=Psico')
            .then((response) => {
                setPublications(response.data.object);
            }).catch(
                err => console.error(err)
            );
    }

	useEffect(() => {
        getData();
    }, []);

	return (
		<div className={css.allPulications}>
			{
				pulications.map((item, index) => (
					<CardPublication
						key={index}
						link={item.link}
						image={item.capa}
						title={item.titulo}
						description={item.descricao}
					/>
				))
			}
		</div>
	);
}

export default PublicationAPI;