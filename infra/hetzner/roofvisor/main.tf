resource "hcloud_ssh_key" "jimmy" {
  name       = var.ssh_key_name
  public_key = var.ssh_public_key
}

# ── Firewall ──────────────────────────────────────────────────────────────────
resource "hcloud_firewall" "web" {
  name = "fw-roofvisor-web"

  # Inbound HTTP (80)
  rule {
    direction  = "in"
    protocol   = "tcp"
    port       = "80"
    source_ips = ["0.0.0.0/0", "::/0"]
  }

  # Inbound HTTPS (443)
  rule {
    direction  = "in"
    protocol   = "tcp"
    port       = "443"
    source_ips = ["0.0.0.0/0", "::/0"]
  }

  # Inbound SSH (22)
  rule {
    direction  = "in"
    protocol   = "tcp"
    port       = "22"
    source_ips = ["0.0.0.0/0", "::/0"]
  }
}

# ── Server ────────────────────────────────────────────────────────────────────
resource "hcloud_server" "web" {
  name         = var.server_name
  image        = var.image
  server_type  = var.server_type
  location     = var.location
  ssh_keys     = [hcloud_ssh_key.jimmy.id]
  firewall_ids = [hcloud_firewall.web.id]

  labels = {
    app   = "roofvisor"
    env   = "production"
    owner = "bbarnes4318"
    role  = "web"
  }
}
