import Image from "next/image";

export default function Post({ props }) {
  return (
    <article className="flex flex-col">
      <Image
        src={props.img}
        width={200}
        height={200}
        alt=""
        className="rounded-lg"
      />
      <h1>{props.title}</h1>
      <h2>{props.user}</h2>
      <p>{props.caption}</p>
      <p>{props.date}</p>
    </article>
  );
}
