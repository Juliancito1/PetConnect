import HomeCard from "../../images/HomeCard.jpg";

export const HomeCards = ({mascota}) => {
  return (
    <section className="my-3 flex flex-col items-center md:inline">
      <div className="w-[75%]">
        <img src={HomeCard} alt="Imagen mascota" className="w-full h-full object-cover rounded-2xl" />
      </div>
      <h5 className="text-3xl">{mascota.nombre}</h5>
      <h5 className="text-md text-emerald-500">{mascota.genero}, {mascota.edad}, {mascota.tamaño}</h5>
    </section>
  );
};
