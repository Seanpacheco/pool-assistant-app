import * as React from 'react';
import { Card, Metric } from '@tremor/react';

export const AccountPreferencesSection = () => {
  return (
    <Card marginTop="mt-4" maxWidth="max-w-sm">
      <Metric color="gray" truncate={false} marginTop="mt-0">
        Account Preferences
      </Metric>
      <form className=" flex gap-2 flex-col mt-3" action="">
        <label className="input-group input-group-vertical">
          <span>Chlorine/Bromine</span>
          <select className="select select-sm select-bordered">
            <option>Liquid Chlorine</option>
            <option>Calcium Hypochlorite (Cal-Hypo)</option>
            <option>Tri-Chlor</option>
            <option>Dichlor</option>
          </select>
        </label>
        <label className="input-group input-group-vertical">
          <span>Raise PH</span>
          <select className="select select-sm select-bordered">
            <option>Soda Ash</option>
          </select>
        </label>
        <label className="input-group input-group-vertical">
          <span>Lower Ph</span>
          <select className="select select-sm select-bordered">
            <option>Muriatic Acid (Hydrochloric Acid)</option>
            <option>Dry Acid (Sodium Bisulfate)</option>
          </select>
        </label>
        <label className="input-group input-group-vertical">
          <span>Lower Total Alkalinity</span>
          <select className="select select-sm select-bordered">
            <option>Muriatic Acid (Hydrochloric Acid)</option>
            <option>Dry Acid (Sodium Bisulfate)</option>
          </select>
        </label>
        <label className="input-group input-group-vertical">
          <span>Raise Total Alkalinity</span>
          <select className="select select-sm select-bordered">
            <option>Baking Soda (Sodium Bicarbonate) </option>
          </select>
        </label>
        <label className="input-group input-group-vertical">
          <span>Raise Calcium Hardness</span>
          <select className="select select-sm select-bordered">
            <option>Calcium Chloride</option>
          </select>
        </label>
        <button type="submit" className="btn bg-teal-400 text-white border-none">
          Save Preferences
        </button>
      </form>
    </Card>
  );
};
