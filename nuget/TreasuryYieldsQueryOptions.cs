using System;
using System.Collections.Generic;
using System.Text;
using Newtonsoft.Json;

namespace APIVerve.API.TreasuryYields
{
    /// <summary>
    /// Query options for the Treasury Yields API
    /// </summary>
    public class TreasuryYieldsQueryOptions
    {
        /// <summary>
        /// Optional date in YYYY-MM-DD format for historical lookup. Omit for current data.
        /// </summary>
        [JsonProperty("date")]
        public string Date { get; set; }

        /// <summary>
        /// Optional security type filter: bills, notes, bonds, tips, frn
        /// </summary>
        [JsonProperty("type")]
        public string Type { get; set; }
    }
}
