import React from 'react';
import useGetVehicles from '../data/use-get-vehicles';
import { vehiclesData } from '../types/vehicles';
import VehicleCard from './VehicleCard';

function VehiclesList(props: { vehicles: vehiclesData }) {
  const { vehicles } = props;
  return (
    <div className="flex flex-wrap">
      {vehicles?.results?.map((vehicle) => (
        <VehicleCard key={vehicle.name} vehicle={vehicle} />
      ))}
    </div>
  );
}

export default VehiclesList;
