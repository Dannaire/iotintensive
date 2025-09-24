"use client";
import React, { useEffect, useState } from "react";
import Badge from "../ui/badge/Badge";
import { ArrowDownIcon, ArrowUpIcon, BoxIconLine } from "@/icons";
import { database } from "../lib/firebaseConfig";
import { ref, onValue } from "firebase/database";

export const Mains = () => {
  const [rainStatus, setRainStatus] = useState<boolean | null>(null);
  const [relayStatus, setRelayStatus] = useState<number | null>(null);
  const [soilStatus, setSoilStatus] = useState<string | null>(null);
  const [soilMoisturePercent, setSoilMoisturePercent] = useState<number | null>(null);

  useEffect(() => {
    const rainRef = ref(database, "monitoring/rain_status");
    const relayRef = ref(database, "monitoring/relay_status");
    const soilStatusRef = ref(database, "monitoring/soil_status");
    const soilMoistureRef = ref(database, "monitoring/soil_moisture_percent");

    const unsubRain = onValue(rainRef, (snapshot) => {
      setRainStatus(snapshot.val());
    });

    const unsubRelay = onValue(relayRef, (snapshot) => {
      setRelayStatus(snapshot.val());
    });

    const unsubSoilStatus = onValue(soilStatusRef, (snapshot) => {
      setSoilStatus(snapshot.val());
    });

    const unsubSoilMoisture = onValue(soilMoistureRef, (snapshot) => {
      setSoilMoisturePercent(snapshot.val());
    });

    return () => {
      unsubRain();
      unsubRelay();
      unsubSoilStatus();
      unsubSoilMoisture();
    };
  }, []);

  return (
    <div className="max-w-3xl mx-auto space-y-6">
      {/* Rain Status */}
      <div className="bg-white border border-gray-100 rounded-lg p-6 shadow-sm hover:shadow-lg transition-shadow duration-200 dark:bg-gray-800 dark:border-gray-700">
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-4">
            <div className="w-12 h-12 bg-blue-50 rounded-lg flex items-center justify-center flex-shrink-0 dark:bg-blue-900/20">
              <BoxIconLine className="text-blue-600 size-6 dark:text-blue-400" />
            </div>
            <div className="space-y-1">
              <span className="text-sm text-gray-500 dark:text-gray-400">Status Hujan</span>
              <h4 className="font-semibold text-gray-900 text-base dark:text-white">
                {rainStatus === null
                  ? "Loading..."
                  : rainStatus
                  ? "Hujan"
                  : "Tidak Hujan"}
              </h4>
            </div>
          </div>
          <Badge color={rainStatus ? "error" : "success"}>
            {rainStatus ? <ArrowDownIcon /> : <ArrowUpIcon />}
          </Badge>
        </div>
      </div>

      {/* Pump Status */}
      <div className="bg-white border border-gray-100 rounded-lg p-6 shadow-sm hover:shadow-lg transition-shadow duration-200 dark:bg-gray-800 dark:border-gray-700">
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-4">
            <div className="w-12 h-12 bg-green-50 rounded-lg flex items-center justify-center flex-shrink-0 dark:bg-green-900/20">
              <BoxIconLine className="text-green-600 size-6 dark:text-green-400" />
            </div>
            <div className="space-y-1">
              <span className="text-sm text-gray-500 dark:text-gray-400">Status Pompa</span>
              <h4 className="font-semibold text-gray-900 text-base dark:text-white">
                {relayStatus === null ? "Loading..." : relayStatus === 0 ? "Mati" : "Hidup"}
              </h4>
            </div>
          </div>
          <Badge color={relayStatus === 0 ? "error" : "success"}>
            {relayStatus === 0 ? <ArrowDownIcon /> : <ArrowUpIcon />}
          </Badge>
        </div>
      </div>

      {/* Soil Condition */}
      <div className="bg-white border border-gray-100 rounded-lg p-6 shadow-sm hover:shadow-lg transition-shadow duration-200 dark:bg-gray-800 dark:border-gray-700">
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-4">
            <div className="w-12 h-12 bg-yellow-50 rounded-lg flex items-center justify-center flex-shrink-0 dark:bg-yellow-900/20">
              <BoxIconLine className="text-yellow-600 size-6 dark:text-yellow-400" />
            </div>
            <div className="space-y-1">
              <span className="text-sm text-gray-500 dark:text-gray-400">Kondisi Tanah</span>
              <h4 className="font-semibold text-gray-900 text-base dark:text-white">
                {soilMoisturePercent === null
                  ? "Loading..."
                  : soilMoisturePercent === 0
                  ? "Belum tertancap"
                  : soilMoisturePercent < 40
                  ? "Kering"
                  : soilMoisturePercent < 80
                  ? "Normal"
                  : "Basah"}
              </h4>
            </div>
          </div>
          <Badge
            color={
              soilMoisturePercent === null
                ? "warning"
                : soilMoisturePercent === 0
                ? "warning"
                : soilMoisturePercent < 40
                ? "error"
                : soilMoisturePercent < 80
                ? "success"
                : "success"
            }
          >
            {soilMoisturePercent === null ? (
              <span className="text-sm">...</span>
            ) : (
              soilMoisturePercent >= 40 ? <ArrowUpIcon /> : <ArrowDownIcon />
            )}
          </Badge>
        </div>
      </div>

      {/* Soil Moisture */}
      <div className="bg-white border border-gray-100 rounded-lg p-6 shadow-sm hover:shadow-lg transition-shadow duration-200 dark:bg-gray-800 dark:border-gray-700">
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-4">
            <div className="w-12 h-12 bg-purple-50 rounded-lg flex items-center justify-center flex-shrink-0 dark:bg-purple-900/20">
              <BoxIconLine className="text-purple-600 size-6 dark:text-purple-400" />
            </div>
            <div className="space-y-1">
              <span className="text-sm text-gray-500 dark:text-gray-400">Kelembapan Tanah</span>
              <h4 className="font-semibold text-gray-900 text-base dark:text-white">
                {soilMoisturePercent !== null ? `${soilMoisturePercent}%` : "Loading..."}
              </h4>
            </div>
          </div>
          <Badge color="success">
            <ArrowUpIcon />
          </Badge>
        </div>
      </div>
    </div>
  );
};
