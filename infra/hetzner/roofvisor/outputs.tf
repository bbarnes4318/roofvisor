output "server_ip" {
  value       = hcloud_server.web.ipv4_address
  description = "The public IP address of the provisioned server."
}
