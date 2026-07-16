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
        /// Optional month in YYYY-MM format for a recent-month lookup (recent months only). Omit for current data.
        /// </summary>
        [JsonProperty("date")]
        public string Date { get; set; }

        /// <summary>
        /// Optional filter for a single point. Legacy security types: bills, notes, bonds, tips, frn. Or a maturity: 1mo, 3mo, 6mo, 1yr, 2yr, 3yr, 5yr, 7yr, 10yr, 20yr, 30yr
        /// </summary>
        [JsonProperty("type")]
        public string Type { get; set; }
    }
}
