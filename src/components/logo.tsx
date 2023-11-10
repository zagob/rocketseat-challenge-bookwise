import { SVGProps } from "react";

export function Logo(props: SVGProps<SVGSVGElement>) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={128}
      height={32}
      fill="none"
      {...props}
    >
      <g opacity={0.9}>
        <path
          fill="#50B2C0"
          d="m19 27.3-.6-.5c-2-1.9-3.4-3.1-3.4-4.6 0-1.2 1-2.2 2.2-2.2.7 0 1.4.3 1.8.8.4-.5 1.1-.8 1.8-.8 1.2 0 2.2.9 2.2 2.2 0 1.5-1.4 2.7-3.4 4.6l-.6.5Z"
        />
        <path
          fill="#8381D9"
          d="M18 6c1.1 0 2 .9 2 2v9.08L19 17l-1 .08V8h-5v8l-2.5-2.25L8 16V8H6v16h7.08c.12.72.37 1.39.72 2H6c-1.1 0-2-.9-2-2V8c0-1.1.9-2 2-2h12Z"
        />
        <path
          fill="url(#a)"
          d="M33.786 23V8.9h6.16c1.48 0 2.627.327 3.44.98.813.64 1.22 1.533 1.22 2.68 0 .76-.193 1.413-.58 1.96-.387.547-.92.947-1.6 1.2.8.227 1.42.627 1.86 1.2.453.56.68 1.273.68 2.14 0 1.253-.427 2.227-1.28 2.92-.84.68-2.013 1.02-3.52 1.02h-6.38Zm2.46-8.12h3.26c1.747 0 2.62-.673 2.62-2.02s-.873-2.02-2.62-2.02h-3.26v4.04Zm0 6.18h3.6c1.76 0 2.64-.707 2.64-2.12 0-1.413-.88-2.12-2.64-2.12h-3.6v4.24Zm15.53 2.14c-1.014 0-1.894-.207-2.64-.62a4.337 4.337 0 0 1-1.74-1.76c-.414-.773-.62-1.68-.62-2.72 0-1.04.206-1.94.62-2.7a4.337 4.337 0 0 1 1.74-1.76c.746-.413 1.626-.62 2.64-.62 1.013 0 1.893.207 2.64.62.746.413 1.326 1 1.74 1.76.413.76.62 1.66.62 2.7 0 1.04-.207 1.947-.62 2.72a4.336 4.336 0 0 1-1.74 1.76c-.747.413-1.627.62-2.64.62Zm0-1.9c.746 0 1.346-.267 1.8-.8.453-.547.68-1.347.68-2.4 0-1.067-.227-1.86-.68-2.38-.454-.533-1.054-.8-1.8-.8-.747 0-1.347.267-1.8.8-.454.52-.68 1.313-.68 2.38 0 1.053.226 1.853.68 2.4.453.533 1.053.8 1.8.8Zm11.523 1.9c-1.013 0-1.893-.207-2.64-.62a4.336 4.336 0 0 1-1.74-1.76c-.413-.773-.62-1.68-.62-2.72 0-1.04.207-1.94.62-2.7a4.336 4.336 0 0 1 1.74-1.76c.747-.413 1.627-.62 2.64-.62 1.013 0 1.893.207 2.64.62.747.413 1.327 1 1.74 1.76.413.76.62 1.66.62 2.7 0 1.04-.207 1.947-.62 2.72a4.337 4.337 0 0 1-1.74 1.76c-.747.413-1.627.62-2.64.62Zm0-1.9c.747 0 1.347-.267 1.8-.8.453-.547.68-1.347.68-2.4 0-1.067-.227-1.86-.68-2.38-.453-.533-1.053-.8-1.8-.8-.747 0-1.347.267-1.8.8-.453.52-.68 1.313-.68 2.38 0 1.053.227 1.853.68 2.4.453.533 1.053.8 1.8.8Zm7.063 1.7V8.9h2.5v8.48h.04l3.94-4.16h3.02l-4.44 4.68 4.72 5.1h-3.06l-4.18-4.36h-.04V23h-2.5Zm14.843 0-4.98-14.1h2.64l3.5 10.4 3.68-10.4h1.9l3.6 10.54 3.6-10.54h2.5L96.625 23h-2.12l-3.58-10.18-3.6 10.18h-2.12Zm17.986-11.88V8.68h2.8v2.44h-2.8Zm.16 11.88v-9.78h2.5V23h-2.5Zm8.677.2c-.826 0-1.6-.1-2.32-.3-.72-.2-1.32-.487-1.8-.86l.64-1.64a6.15 6.15 0 0 0 1.66.78c.614.173 1.227.26 1.84.26.64 0 1.114-.107 1.42-.32.32-.227.48-.52.48-.88 0-.56-.413-.92-1.24-1.08l-2-.38c-1.693-.32-2.54-1.2-2.54-2.64 0-.64.174-1.193.52-1.66.36-.467.854-.827 1.48-1.08.627-.253 1.347-.38 2.16-.38.694 0 1.36.1 2 .3.64.187 1.187.473 1.64.86l-.68 1.64a4.392 4.392 0 0 0-1.4-.76 4.65 4.65 0 0 0-1.54-.28c-.653 0-1.14.113-1.46.34-.306.227-.46.527-.46.9 0 .587.38.947 1.14 1.08l2 .38c.867.16 1.52.453 1.96.88.454.427.68 1 .68 1.72 0 .973-.38 1.74-1.14 2.3-.76.547-1.773.82-3.04.82Zm11.006 0c-1.107 0-2.06-.207-2.86-.62-.8-.413-1.42-1-1.86-1.76-.427-.76-.64-1.66-.64-2.7 0-1.013.207-1.9.62-2.66a4.656 4.656 0 0 1 1.74-1.78c.747-.44 1.593-.66 2.54-.66 1.387 0 2.48.44 3.28 1.32.813.88 1.22 2.08 1.22 3.6v.74h-7c.187 1.747 1.187 2.62 3 2.62.547 0 1.093-.08 1.64-.24a4.65 4.65 0 0 0 1.5-.8l.7 1.68c-.467.387-1.053.693-1.76.92a6.906 6.906 0 0 1-2.12.34Zm-.36-8.48c-.733 0-1.327.227-1.78.68-.453.453-.727 1.067-.82 1.84h4.92c-.053-.813-.28-1.433-.68-1.86-.387-.44-.933-.66-1.64-.66Z"
        />
      </g>
      <defs>
        <linearGradient
          id="a"
          x1={32}
          x2={128}
          y1={16.314}
          y2={16.314}
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#7FD1CC" />
          <stop offset={1} stopColor="#9694F5" />
        </linearGradient>
      </defs>
    </svg>
  );
}