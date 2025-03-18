import { Card, Image, Text, Title } from '@mantine/core';
import cairo from '../../assets/cairo.png';
import zayed from '../../assets/zayed.png';
import northCost from '../../assets/north-cost.png';
import madintiy from '../../assets/madintiy.png';
import october from '../../assets/october.png';
import alex from '../../assets/alex.png';

const properties = [
    { id: 1, name: 'Cairo', count: 8, image: cairo },
    { id: 2, name: 'El Sheikh', count: 3, image: zayed},
    { id: 3, name: 'North Cost', count: 1, image: northCost },
    { id: 4, name: 'Madinaty', count: 2, image: madintiy },
    { id: 5, name: '6 October', count: 2, image: october },
    { id: 6, name: 'Alexandria', count: 2, image: alex },
];

const PropertiesByArea = () => {
    return (
        <section className="py-8 px-4 w-full flex flex-col justify-center items-center">
            {/* Section Title */}
            <Title order={2} className="text-center mb-10 text-3xl font-bold">
                Properties by Area
            </Title>

            {/* Cards Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 w-full">
                {properties?.map((property) => (
                    <Card key={property?.id} className="w-full flex items-center justify-center gap-2">
                        <Image
                            src={property?.image}
                            alt={property?.name}
                            height={100}
                            className="object-cover rounded-xl"
                        />
                        <div className="">
                            <Text className="font-semibold text-sm break-words max-w-[9ch]">{property?.name}</Text>
                            <Text className="text-gray-500 text-xs">
                                {property?.count} {property?.count > 1 ? 'Properties' : 'Property'}
                            </Text>
                        </div>
                    </Card>
                ))}
            </div>
        </section>
    );
};
export default PropertiesByArea;
