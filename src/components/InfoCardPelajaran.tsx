import { Button, Card } from "flowbite-react";

export const InfoCardPelajaran = ({ title, count, onClick }: { title: string; count: number; onClick: () => void }) => {
    return (
      <Card className="w-full text-center cursor-pointer" onClick={onClick}>
        <h5 className="text-2xl font-bold">{count}</h5>
        <p className="text-gray-500">{title}</p>
      </Card>
    );
  };