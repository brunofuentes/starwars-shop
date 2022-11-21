import React from 'react';
import useGetVehicles from '../data/use-get-vehicles';
import { vehiclesData } from '../types/vehicles';
import VehicleCard from './VehicleCard';

function VehiclesList(props: { vehicles: vehiclesData }) {
  const { vehicles } = props;
  return (
    <div className="sm:grid grid-cols-2 lg:grid-cols-3">
      {vehicles?.results?.map((vehicle) => (
        <VehicleCard key={vehicle.name} vehicle={vehicle} />
      ))}
    </div>
  );
}

export default VehiclesList;
