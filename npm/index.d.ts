declare module '@apiverve/treasuryyields' {
  export interface treasuryyieldsOptions {
    api_key: string;
    secure?: boolean;
  }

  export interface treasuryyieldsResponse {
    status: string;
    error: string | null;
    data: TreasuryYieldsData;
    code?: number;
  }


  interface TreasuryYieldsData {
      date:  Date;
      bills: number;
      notes: number;
      bonds: number;
      tips:  number;
      frn:   number;
  }

  export default class treasuryyieldsWrapper {
    constructor(options: treasuryyieldsOptions);

    execute(callback: (error: any, data: treasuryyieldsResponse | null) => void): Promise<treasuryyieldsResponse>;
    execute(query: Record<string, any>, callback: (error: any, data: treasuryyieldsResponse | null) => void): Promise<treasuryyieldsResponse>;
    execute(query?: Record<string, any>): Promise<treasuryyieldsResponse>;
  }
}
