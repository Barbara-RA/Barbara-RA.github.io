
import Title from '../../Common/Title';
import css from './BenefitsSection.module.css'
import CircleImageAndTitle from './CircleImageAndTitle/CircleImageAndTitle';

function BenefitsSection() {

	const subtitleImage = [
		{
		  image: "/Icons/avatar.png",
		  subtitle: "Autoestima",
		},
		{
		  image: "/Icons/natural-mode.png",
		  subtitle: "Bem-estar",
		},
		{
		  image: "/Icons/dumbbell.png",
		  subtitle: "Saúde Integral",
		},
		{
		  image: "/Icons/every-user.png",
		  subtitle: "Relacionamentos Saudáveis",
		},
		{
		  image: "/Icons/crown-three.png",
		  subtitle: "Autoconhecimento",
		},
		{
		  image: "/Icons/escalators.png",
		  subtitle: "Resiliência",
		}
	  ]

	return (
		<section className={css.benefitsSection}>
			<div >
				<div>
					<div>
						<Title title={'Como a Terapia Ajuda'} style={'titleBenefitsSection'}/>
						<p>O processo terapêutico permite explorar e compreender melhor seus pensamentos e comportamentos, desenvolvendo estratégias eficazes para enfrentar desafios.</p>
						<p>Você terá um espaço seguro para expressar suas preocupações e melhorar a qualidade de seus relacionamentos, resultando em uma vida mais equilibrada e satisfatória.</p>
					</div>
				</div>
				<div>
					<div className={css.boxesGroupIcons}>
						{subtitleImage.map((item, index) => (
							<CircleImageAndTitle
								key={index} 
								image={item.image}
								title={item.subtitle}
							/>
						))}
					</div>
				</div>
			</div>		
		</section>
	);
}

export default BenefitsSection;