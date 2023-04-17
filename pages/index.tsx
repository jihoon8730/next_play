import * as React from "react";
import Image from "next/image";

import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import Autocomplete from "@mui/material/Autocomplete";

import { COUNTRY_DATA } from "@/public/data/COUNTRY_DATA";

export default function CountrySelect() {
  return (
    <Autocomplete
      sx={{ width: 300 }}
      options={COUNTRY_DATA}
      autoHighlight
      getOptionLabel={(option) => option.label}
      renderOption={(props, option) => (
        <Box
          component="li"
          sx={{ "& > img": { mr: 2, flexShrink: 0 } }}
          {...props}
        >
          <Image
            loading="lazy"
            width={20}
            height={13}
            src={`https://flagcdn.com/w20/${option.code.toLowerCase()}.png`}
            alt="img loading fail"
          />
          {option.label} ({option.code}) +{option.phone}
        </Box>
      )}
      renderInput={(params) => (
        <TextField
          {...params}
          label="Country"
          inputProps={{
            ...params.inputProps,
            autoComplete: "new-password", // disable autocomplete and autofill
          }}
        />
      )}
    />
  );
}
