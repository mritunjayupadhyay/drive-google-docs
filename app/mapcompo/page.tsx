"use client"
import { getData } from '@/apihandler/media.api';
import SimpleMap from '@/components/map.component';
import { IMedia, IMediaRes } from '@/interfaces/media.interface';
import React, { useEffect, useState } from 'react';

const MapCompo: React.FC = () => {
    return (
        <div>
      <h1>My Leaflet.js and React Map</h1>
      <SimpleMap />
    </div>
    )
};

export default MapCompo;