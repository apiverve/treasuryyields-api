declare module '@apiverve/treasuryyields' {
  export interface treasuryyieldsOptions {
    api_key: string;
    secure?: boolean;
  }

  /**
   * Describes fields the current plan does not unlock. Locked fields arrive as null
   * in `data`; `locked_fields` names them, using dot paths for nested fields.
   * Absent when the plan unlocks everything.
   */
  export interface PremiumInfo {
    message: string;
    upgrade_url: string;
    locked_fields: string[];
  }

  export interface treasuryyieldsResponse {
    status: string;
    error: string | null;
    data: TreasuryYieldsData;
    code?: number;
    premium?: PremiumInfo;
  }


  interface TreasuryYieldsData {
      date:               Date | null;
      yields:             { [key: string]: number | null };
      realYields:         { [key: string]: number | null };
      bills:              number | null;
      notes:              number | null;
      bonds:              number | null;
      tips:               number | null;
      frn:                number | null;
      changes:            { [key: string]: Change };
      spread10Yr2Yr:      number | null;
      spread10Yr3Mo:      number | null;
      spread30Yr5Yr:      number | null;
      spread5Yr2Yr:       number | null;
      inverted10Yr2Yr:    boolean | null;
      inverted10Yr3Mo:    boolean | null;
      curveShape:         null | string;
      breakevenInflation: { [key: string]: number | null };
  }
  
  interface Change {
      change1D:  number | null;
      direction: Direction | null;
  }
  
  enum Direction {
      Unchanged = "unchanged",
      Up = "up",
  }

  export default class treasuryyieldsWrapper {
    constructor(options: treasuryyieldsOptions);

    execute(callback: (error: any, data: treasuryyieldsResponse | null) => void): Promise<treasuryyieldsResponse>;
    execute(query: Record<string, any>, callback: (error: any, data: treasuryyieldsResponse | null) => void): Promise<treasuryyieldsResponse>;
    execute(query?: Record<string, any>): Promise<treasuryyieldsResponse>;
  }
}
