/**
 * PricingMatrix — Full pricing table showing all tiers, party sizes, and durations.
 * 2 tiers (Lightning Lane / LL + Dining) × 2 party sizes × 3 durations.
 * Server component — no interactivity needed.
 */
export default function PricingMatrix() {
  return (
    <table className="price-matrix">
      <thead>
        <tr>
          <th></th>
          <th>
            <span className="col-group">Party 1–6</span>
            Lightning Lane
          </th>
          <th>
            <span className="col-group">Party 1–6</span>
            + Dining
          </th>
          <th>
            <span className="col-group">Party 7+</span>
            Lightning Lane
          </th>
          <th>
            <span className="col-group">Party 7+</span>
            + Dining
          </th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <th scope="row">
            Single day
            <span className="row-sub">one park day</span>
          </th>
          <td className="price">$10</td>
          <td className="price">$15</td>
          <td className="price">$15</td>
          <td className="price">$25</td>
        </tr>
        <tr>
          <th scope="row">
            5-day pack
            <span className="row-sub">redeem within 30 days</span>
          </th>
          <td className="price">$25</td>
          <td className="price">$35</td>
          <td className="price">$35</td>
          <td className="price">$50</td>
        </tr>
        <tr>
          <th scope="row">
            Annual
            <span className="row-sub">unlimited park days</span>
          </th>
          <td className="price">$100</td>
          <td className="price">$150</td>
          <td className="price dim">n/a</td>
          <td className="price dim">n/a</td>
        </tr>
      </tbody>
    </table>
  );
}
