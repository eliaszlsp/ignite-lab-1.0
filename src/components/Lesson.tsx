import { CheckCircle, Lock } from "phosphor-react";
import { isPast, format } from "date-fns";
import ptBR from "date-fns/locale/pt-BR";
import { Link, useParams } from "react-router-dom";
import classNames from "classnames";

interface LessonProps {
  title: string;
  slug: string;
  availableAT: Date;
  type: "live" | "class";
}
/* Domingo • 20 de junho • 19h00 */
export function Lesson(props: LessonProps) {
  const { slug } = useParams<{ slug: string }>();

  const isLessonAvailable = isPast(props.availableAT);
  const availableATDataFormatted = format(
    props.availableAT,
    "EEEE ' • ' d 'de' MMMM ' • ' HH:mm",
    { locale: ptBR }
  ).replace(/(?:^|\s)\S/g, (a) => a.toUpperCase());

  const isActiveLesson = slug == props.slug;

  return (
    <Link to={`/event/lesson/${props.slug}`} className="group">
      <span className="text-gray-300">{availableATDataFormatted}</span>

      <div
        className={classNames(
          "rounded border border-gray-500 p-4 mt-2 group-hover:border-green-500",
          {
            " bg-green-500": isActiveLesson,
          }
        )}
      >
        <header className="flex items-center justify-between">
          {isLessonAvailable ? (
            <span
              className={classNames(
                "text-sm text-blue-500 font-medium flex items-center gap-2",
                {
                  "text-white": isActiveLesson,
                  "text-blue-500 ": !isActiveLesson,
                }
              )}
            >
              <CheckCircle size={20} />
              Conteúdo liberado
            </span>
          ) : (
            <span
              className={
                "text-sm text-blue-500 font-medium flex items-center gap-2"
              }
            >
              <Lock size={20} />
              Em Breve
            </span>
          )}
          <span
            className={classNames(
              "text-xs rounded py-[0,125] px-2 text-white border font-bold ",
              {
                "border-white": isActiveLesson,
                "border-green-300": !isActiveLesson,
              }
            )}
          >
            {props.type === "live" ? "AO VIVO" : "AULA PRATICA"}
          </span>
        </header>
        <strong
          className={classNames(" mt-5 block", {
            "text-white": isActiveLesson,
            "text-gray-200": !isActiveLesson,
          })}
        >
          {props.title}
        </strong>
      </div>
    </Link>
  );
}
