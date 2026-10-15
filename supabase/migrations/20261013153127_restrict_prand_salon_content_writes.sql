/*
# Restrict PRAND SALON content writes

1. Purpose
- Remove unused browser write privileges from the content tables created for PRAND SALON.

2. Modified Tables
- `salon_branches`: anon and authenticated retain SELECT only.
- `salon_services`: anon and authenticated retain SELECT only.
- `barber_profiles`: anon and authenticated retain SELECT only.
- `gallery_items`: anon and authenticated retain SELECT only.
- `customer_reviews`: anon and authenticated retain SELECT only; future submissions require an explicitly designed protected endpoint.

3. Security
- Revoke INSERT, UPDATE, and DELETE privileges from `anon` and `authenticated` on all five content tables.
- Existing row-level policies continue to restrict SELECT to published content, or approved and published reviews.
- Trusted service-role administration is not affected by these client-role restrictions.

4. Important Notes
- No rows are inserted, updated, or deleted.
- No existing table structure is removed or changed.
- The current frontend remains on its local fallback data until database reads are intentionally connected.
*/

REVOKE INSERT, UPDATE, DELETE ON TABLE public.salon_branches FROM anon, authenticated;
REVOKE INSERT, UPDATE, DELETE ON TABLE public.salon_services FROM anon, authenticated;
REVOKE INSERT, UPDATE, DELETE ON TABLE public.barber_profiles FROM anon, authenticated;
REVOKE INSERT, UPDATE, DELETE ON TABLE public.gallery_items FROM anon, authenticated;
REVOKE INSERT, UPDATE, DELETE ON TABLE public.customer_reviews FROM anon, authenticated;

GRANT SELECT ON TABLE public.salon_branches TO anon, authenticated;
GRANT SELECT ON TABLE public.salon_services TO anon, authenticated;
GRANT SELECT ON TABLE public.barber_profiles TO anon, authenticated;
GRANT SELECT ON TABLE public.gallery_items TO anon, authenticated;
GRANT SELECT ON TABLE public.customer_reviews TO anon, authenticated;
