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
      date:         Date | null;
      bills:        number | null;
      notes:        number | null;
      bonds:        number | null;
      tips:         number | null;
      frn:          number | null;
      changes:      Changes;
      previousDate: Date | null;
  }
  
  interface Changes {
      bills: Bills;
      notes: Bills;
      bonds: Bills;
      tips:  Bills;
      frn:   Bills;
  }
  
  interface Bills {
      change1D:  number | null;
      direction: null | string;
  }

  export default class treasuryyieldsWrapper {
    constructor(options: treasuryyieldsOptions);

    execute(callback: (error: any, data: treasuryyieldsResponse | null) => void): Promise<treasuryyieldsResponse>;
    execute(query: Record<string, any>, callback: (error: any, data: treasuryyieldsResponse | null) => void): Promise<treasuryyieldsResponse>;
    execute(query?: Record<string, any>): Promise<treasuryyieldsResponse>;
  }
}
